import HarnessBoard from "./HarnessBoard";
import { harness } from "../../lib/harness";

export default function HarnessPage() {
  return <HarnessBoard harness={harness} />;
}
