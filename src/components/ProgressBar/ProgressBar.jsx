import { Bar } from "./styles.js"

import bar1 from "../../assets/bar-1.svg"
import bar2 from "../../assets/bar-2.svg"
import bar3 from "../../assets/bar-3.svg"

export function ProgressBar({ step }) {
  return <Bar src={step === 0 ? bar1 : step === 1 ? bar2 : bar3} />
}
