'use client';

import { useMemo, useState } from 'react';
import { US_PRICING, US_WAGE_FACTS } from '@/lib/us';

// Phase 17. Client-only calculator (the site is a static export, so there is no
// server). Every default is either a sourced BLS figure (see lib/us.ts) or an
// input the visitor controls; the page explains the formula in plain text so
// the result can be checked by hand.

const DEFAULT_HOURLY = Math.round((US_WAGE_FACTS.orderClerkAnnualMedian / 2080) * 100) / 100; // ≈ $22.20

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const num = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 'var(--radius-pill)',
  padding: '10px 16px',
  height: 44,
  color: '#fff',
  fontFamily: 'var(--font-text)',
  fontSize: 16,
  outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  color: 'rgba(255,255,255,0.6)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  fontWeight: 600,
  marginBottom: 8,
};

function Field({
  id,
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step,
}: {
  id: string;
  label: string;
  hint: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        value={Number.isFinite(value) ? value : ''}
        onChange={(e) => {
          const n = parseFloat(e.target.value);
          onChange(Number.isFinite(n) ? Math.min(Math.max(n, min), max) : 0);
        }}
        style={inputStyle}
      />
      <span style={{ display: 'block', marginTop: 6, fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.45 }}>
        {hint}
      </span>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div
      style={{
        padding: 18,
        borderRadius: 'var(--radius-lg)',
        background: 'rgba(41,151,255,0.08)',
        border: '1px solid rgba(41,151,255,0.25)',
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: '#fff', marginTop: 6, letterSpacing: '-0.02em' }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4, lineHeight: 1.45 }}>{sub}</div>}
    </div>
  );
}

export function OrderEntryCalculator() {
  const [ordersPerDay, setOrdersPerDay] = useState(40);
  const [minutesPerOrder, setMinutesPerOrder] = useState(4);
  const [daysPerYear, setDaysPerYear] = useState(250);
  const [hourlyWage, setHourlyWage] = useState(DEFAULT_HOURLY);
  const [includeBenefits, setIncludeBenefits] = useState(true);
  const [automatedShare, setAutomatedShare] = useState(70);

  const r = useMemo(() => {
    const hoursPerYear = (ordersPerDay * minutesPerOrder * daysPerYear) / 60;
    const loadedHourly = includeBenefits ? hourlyWage / US_WAGE_FACTS.wageShareOfCompensation : hourlyWage;
    const costPerYear = hoursPerYear * loadedHourly;
    const fte = hoursPerYear / 2080;
    const hoursSaved = hoursPerYear * (automatedShare / 100);
    const savingsPerYear = hoursSaved * loadedHourly;
    const savingsPerMonth = savingsPerYear / 12;
    const paybackMin = savingsPerMonth > 0 ? US_PRICING.buildMin / savingsPerMonth : null;
    const paybackMax = savingsPerMonth > 0 ? US_PRICING.buildMax / savingsPerMonth : null;
    return { hoursPerYear, loadedHourly, costPerYear, fte, hoursSaved, savingsPerYear, paybackMin, paybackMax };
  }, [ordersPerDay, minutesPerOrder, daysPerYear, hourlyWage, includeBenefits, automatedShare]);

  const payback =
    r.paybackMin === null || r.paybackMax === null
      ? 'Enter your numbers above'
      : `${num.format(Math.max(r.paybackMin, 0.1))}–${num.format(r.paybackMax)} months`;

  return (
    <div
      style={{
        padding: '28px 24px',
        borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        border: '1px solid rgba(255,255,255,0.1)',
        margin: '28px 0 8px',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        <Field id="calc-orders" label="Orders per day" hint="Orders, POs or quote requests keyed in by hand" value={ordersPerDay} onChange={setOrdersPerDay} min={0} max={5000} step={1} />
        <Field id="calc-minutes" label="Minutes per order" hint="Reading, typing, checking and fixing each one" value={minutesPerOrder} onChange={setMinutesPerOrder} min={0} max={120} step={0.5} />
        <Field id="calc-days" label="Working days per year" hint="About 250 for a Monday-to-Friday business" value={daysPerYear} onChange={setDaysPerYear} min={0} max={366} step={1} />
        <Field id="calc-wage" label="Hourly wage ($)" hint="Default: BLS median for US order clerks, May 2025" value={hourlyWage} onChange={setHourlyWage} min={0} max={200} step={0.5} />
        <Field id="calc-share" label="Share the assistant drafts (%)" hint="Your own estimate. Unusual orders stay with your team" value={automatedShare} onChange={setAutomatedShare} min={0} max={100} step={5} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 22 }}>
          <input
            id="calc-benefits"
            type="checkbox"
            checked={includeBenefits}
            onChange={(e) => setIncludeBenefits(e.target.checked)}
            style={{ width: 18, height: 18, accentColor: '#2997ff' }}
          />
          <label htmlFor="calc-benefits" style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>
            Include benefits and payroll costs (wages are about 70% of total pay cost, BLS)
          </label>
        </div>
      </div>

      <div
        aria-live="polite"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginTop: 26 }}
      >
        <Stat label="Hours a year on order entry" value={num.format(r.hoursPerYear)} sub={`About ${num.format(r.fte)} full-time people`} />
        <Stat label="What it costs you a year" value={usd.format(r.costPerYear)} sub={`At ${usd.format(r.loadedHourly)} an hour${includeBenefits ? ', with benefits' : ''}`} />
        <Stat label="Hours an assistant could give back" value={num.format(r.hoursSaved)} sub={`Worth about ${usd.format(r.savingsPerYear)} a year`} />
        <Stat label="Payback on a typical build" value={payback} sub={`For a ${US_PRICING.buildRange} build, before running costs`} />
      </div>

      <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <a href="#enquire" className="btn-pill press" style={{ fontWeight: 600 }}>
          Test it free on 10 of your orders
        </a>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
          Nothing you type here is stored or sent anywhere.
        </span>
      </div>
    </div>
  );
}

export default OrderEntryCalculator;
