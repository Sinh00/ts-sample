export default function anySample() {
  let name: any = "tarou";
  console.log("primitive sample: 1", typeof name, name);

  name = 28;
  console.log("primitive sample: 2", typeof name, name);
}
