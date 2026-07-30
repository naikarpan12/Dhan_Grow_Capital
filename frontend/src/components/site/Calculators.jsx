import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { inr } from "@/lib/site";

const Field = ({ label, value, suffix, min, max, step, onChange, testid }) => (
  <div className="mb-6">
    <div className="flex items-baseline justify-between mb-3">
      <label className="overline text-black/60">{label}</label>
      <span className="font-mono-num text-lg">
        {typeof value === "number" && value >= 1000 ? inr(value) : value}
        {suffix ? <span className="ml-1 text-black/50 text-xs">{suffix}</span> : null}
      </span>
    </div>
    <input
      type="range"
      className="brutal w-full"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      data-testid={testid}
    />
    <div className="flex justify-between mt-2 overline text-black/40">
      <span>{typeof min === "number" && min >= 1000 ? inr(min) : min}</span>
      <span>{typeof max === "number" && max >= 1000 ? inr(max) : max}</span>
    </div>
  </div>
);

const ChartBlock = ({ data, invested, corpus, gains }) => (
  <div className="border border-ink p-6 md:p-8 bg-[#f4f1ea]">
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div>
        <div className="overline text-black/50">Invested</div>
        <div className="font-mono-num text-2xl mt-1">{inr(invested)}</div>
      </div>
      <div>
        <div className="overline text-black/50">Est. Corpus</div>
        <div className="font-mono-num text-2xl mt-1 text-terracotta">{inr(corpus)}</div>
      </div>
      <div>
        <div className="overline text-black/50">Wealth Gain</div>
        <div className="font-mono-num text-2xl mt-1">{inr(gains)}</div>
      </div>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
          <defs>
            <linearGradient id="gCorpus" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#183226" stopOpacity={0.55} />
              <stop offset="100%" stopColor="#183226" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="gInvest" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B84A36" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#B84A36" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(10,10,10,0.06)" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 11, fill: "rgba(10,10,10,0.5)", fontFamily: "JetBrains Mono" }}
            tickLine={false}
            axisLine={{ stroke: "rgba(10,10,10,0.15)" }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "rgba(10,10,10,0.5)", fontFamily: "JetBrains Mono" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => (v >= 1e7 ? `${(v / 1e7).toFixed(1)}Cr` : `${(v / 1e5).toFixed(0)}L`)}
          />
          <Tooltip
            contentStyle={{
              background: "#0a0a0a",
              border: "none",
              borderRadius: 2,
              color: "#f4f1ea",
              fontFamily: "JetBrains Mono",
              fontSize: 12,
            }}
            formatter={(v, name) => [inr(v), name === "corpus" ? "Corpus" : "Invested"]}
            labelFormatter={(l) => `Year ${l}`}
          />
          <Area type="monotone" dataKey="invested" stroke="#B84A36" strokeWidth={1.5} fill="url(#gInvest)" />
          <Area type="monotone" dataKey="corpus" stroke="#183226" strokeWidth={2} fill="url(#gCorpus)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

function useSIP() {
  const [monthly, setMonthly] = useState(15000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(12);
  const { data, corpus, invested, gains } = useMemo(() => {
    const r = rate / 100 / 12;
    const rows = [];
    let corp = 0;
    let inv = 0;
    for (let y = 1; y <= years; y++) {
      for (let m = 0; m < 12; m++) {
        corp = (corp + monthly) * (1 + r);
        inv += monthly;
      }
      rows.push({ year: y, invested: Math.round(inv), corpus: Math.round(corp) });
    }
    return { data: rows, corpus: Math.round(corp), invested: inv, gains: Math.round(corp - inv) };
  }, [monthly, years, rate]);
  return { monthly, setMonthly, years, setYears, rate, setRate, data, corpus, invested, gains };
}

function useLumpsum() {
  const [amount, setAmount] = useState(500000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const { data, corpus, invested, gains } = useMemo(() => {
    const rows = [];
    for (let y = 1; y <= years; y++) {
      const c = amount * Math.pow(1 + rate / 100, y);
      rows.push({ year: y, invested: amount, corpus: Math.round(c) });
    }
    const corp = amount * Math.pow(1 + rate / 100, years);
    return { data: rows, corpus: Math.round(corp), invested: amount, gains: Math.round(corp - amount) };
  }, [amount, years, rate]);
  return { amount, setAmount, years, setYears, rate, setRate, data, corpus, invested, gains };
}

function useRetirement() {
  const [age, setAge] = useState(32);
  const [retireAt, setRetireAt] = useState(60);
  const [monthly, setMonthly] = useState(20000);
  const [rate, setRate] = useState(11);
  const years = Math.max(1, retireAt - age);
  const { data, corpus, invested, gains } = useMemo(() => {
    const r = rate / 100 / 12;
    const rows = [];
    let corp = 0;
    let inv = 0;
    for (let y = 1; y <= years; y++) {
      for (let m = 0; m < 12; m++) {
        corp = (corp + monthly) * (1 + r);
        inv += monthly;
      }
      rows.push({ year: y, invested: Math.round(inv), corpus: Math.round(corp) });
    }
    return { data: rows, corpus: Math.round(corp), invested: inv, gains: Math.round(corp - inv) };
  }, [monthly, years, rate]);
  return { age, setAge, retireAt, setRetireAt, monthly, setMonthly, rate, setRate, years, data, corpus, invested, gains };
}

function useEducation() {
  const [childAge, setChildAge] = useState(4);
  const [target, setTarget] = useState(4000000);
  const [rate, setRate] = useState(12);
  const years = Math.max(1, 18 - childAge);
  const { data, monthly, invested, gains, corpus } = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const m = (target * r) / (Math.pow(1 + r, n) - 1) / (1 + r);
    const rows = [];
    let corp = 0;
    let inv = 0;
    for (let y = 1; y <= years; y++) {
      for (let k = 0; k < 12; k++) {
        corp = (corp + m) * (1 + r);
        inv += m;
      }
      rows.push({ year: y, invested: Math.round(inv), corpus: Math.round(corp) });
    }
    return { data: rows, monthly: m, invested: inv, corpus: target, gains: target - inv };
  }, [years, target, rate]);
  return { childAge, setChildAge, target, setTarget, rate, setRate, years, data, monthly, invested, gains, corpus };
}

export default function Calculators() {
  const sip = useSIP();
  const lump = useLumpsum();
  const ret = useRetirement();
  const edu = useEducation();

  return (
    <section id="calculators" data-testid="calculators-section" className="py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="overline text-black/50">§ Calculators</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">
              See the compounding<br />
              <span className="italic">before</span> you commit.
            </h2>
            <p className="mt-6 max-w-xl text-black/70">
              Illustrative projections — not guarantees. Actual returns depend on
              scheme selection, holding period and market cycles.
            </p>
          </div>
        </div>

        <Tabs defaultValue="sip" className="w-full" data-testid="calculators-tabs">
          <TabsList className="w-full flex flex-wrap gap-2 bg-transparent p-0 border-b border-ink rounded-none justify-start h-auto mb-10">
            {[
              { v: "sip", l: "SIP" },
              { v: "lumpsum", l: "Lumpsum" },
              { v: "retirement", l: "Retirement" },
              { v: "education", l: "Education" },
            ].map((t) => (
              <TabsTrigger
                key={t.v}
                value={t.v}
                data-testid={`calc-tab-${t.v}`}
                className="rounded-none border-0 border-b-2 border-transparent data-[state=active]:border-terracotta data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-terracotta px-6 py-3 overline"
              >
                {t.l}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="sip">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-5 border border-ink p-6 md:p-8 bg-[#e8e3d8]/40">
                <p className="overline text-black/60 mb-8">Systematic Investment Plan</p>
                <Field label="Monthly investment" value={sip.monthly} min={500} max={200000} step={500} onChange={sip.setMonthly} testid="sip-monthly" />
                <Field label="Investment period" value={sip.years} suffix="yrs" min={1} max={40} step={1} onChange={sip.setYears} testid="sip-years" />
                <Field label="Expected return" value={sip.rate} suffix="% p.a." min={4} max={20} step={0.5} onChange={sip.setRate} testid="sip-rate" />
              </div>
              <div className="md:col-span-7">
                <ChartBlock data={sip.data} invested={sip.invested} corpus={sip.corpus} gains={sip.gains} />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="lumpsum">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 border border-ink p-6 md:p-8 bg-[#e8e3d8]/40">
                <p className="overline text-black/60 mb-8">One-time Lumpsum</p>
                <Field label="Investment amount" value={lump.amount} min={10000} max={10000000} step={10000} onChange={lump.setAmount} testid="lump-amount" />
                <Field label="Holding period" value={lump.years} suffix="yrs" min={1} max={30} step={1} onChange={lump.setYears} testid="lump-years" />
                <Field label="Expected return" value={lump.rate} suffix="% p.a." min={4} max={20} step={0.5} onChange={lump.setRate} testid="lump-rate" />
              </div>
              <div className="md:col-span-7">
                <ChartBlock data={lump.data} invested={lump.invested} corpus={lump.corpus} gains={lump.gains} />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="retirement">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 border border-ink p-6 md:p-8 bg-[#e8e3d8]/40">
                <p className="overline text-black/60 mb-8">Retirement Corpus</p>
                <Field label="Current age" value={ret.age} suffix="yrs" min={18} max={55} step={1} onChange={ret.setAge} testid="ret-age" />
                <Field label="Retirement age" value={ret.retireAt} suffix="yrs" min={45} max={70} step={1} onChange={ret.setRetireAt} testid="ret-retireat" />
                <Field label="Monthly SIP" value={ret.monthly} min={1000} max={200000} step={1000} onChange={ret.setMonthly} testid="ret-monthly" />
                <Field label="Expected return" value={ret.rate} suffix="% p.a." min={4} max={16} step={0.5} onChange={ret.setRate} testid="ret-rate" />
              </div>
              <div className="md:col-span-7">
                <ChartBlock data={ret.data} invested={ret.invested} corpus={ret.corpus} gains={ret.gains} />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 border border-ink p-6 md:p-8 bg-[#e8e3d8]/40">
                <p className="overline text-black/60 mb-8">Child Education Goal</p>
                <Field label="Child's current age" value={edu.childAge} suffix="yrs" min={0} max={17} step={1} onChange={edu.setChildAge} testid="edu-age" />
                <Field label="Target corpus at age 18" value={edu.target} min={500000} max={20000000} step={100000} onChange={edu.setTarget} testid="edu-target" />
                <Field label="Expected return" value={edu.rate} suffix="% p.a." min={4} max={18} step={0.5} onChange={edu.setRate} testid="edu-rate" />
                <div className="border-t border-ink pt-6 mt-4">
                  <div className="overline text-black/50">Required monthly SIP</div>
                  <div className="font-mono-num text-3xl mt-2 text-terracotta">{inr(edu.monthly)}</div>
                  <div className="overline text-black/50 mt-1">for {edu.years} yrs</div>
                </div>
              </div>
              <div className="md:col-span-7">
                <ChartBlock data={edu.data} invested={edu.invested} corpus={edu.corpus} gains={edu.gains} />
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
