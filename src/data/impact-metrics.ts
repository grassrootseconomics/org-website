export interface ImpactMetric {
  value: number;
  suffix: string;
  label: string;
  story: string;
}

export const impactMetrics: ImpactMetric[] = [
  { value: 77, suffix: "%", label: "Increase in trust", story: "Communities reported stronger bonds after formalizing mutual commitments" },
  { value: 347, suffix: "%", label: "Increase in gifting", story: "Mutual aid surged as neighbors formalized their commitments through vouchers" },
  { value: 57, suffix: "%", label: "Increase in environmental activities", story: "Community members invested more time in environmental activities and food forests" },
  { value: 23, suffix: "%", label: "Increase in school attendance", story: "Families could afford school supplies through diversified income" },
  { value: 25, suffix: "%", label: "Decrease in crime and corruption", story: "Economic inclusion reduced the need for informal economies" },
  { value: 17, suffix: "%", label: "Jobs created", story: "New businesses emerged to serve the growing voucher network" },
  { value: 37, suffix: "%", label: "Sales revenue", story: "Merchants saw consistent trade even when national currency was scarce" },
  { value: 78, suffix: "%", label: "Food Security", story: "Families like Jacob's went from eating ugali every day to buying diverse foods" },
];
