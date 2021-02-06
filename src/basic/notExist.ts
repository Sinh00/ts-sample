export default function notExistSample() {
  const name = "jirou";
  // name = undefined

  console.log("notExist sample: 1", typeof name, name);
  // name が nullの時
  if (!name) {
    console.log("notExist sample: 2", "名前はまだ" + name);
  } else {
    console.log("notExist sample: 2", "名前は" + name);
  }

  const age = undefined;
  console.log("notExist sample: 4", typeof age, age);
  // age が undefinedの時
  if (!age) {
    console.log("notExist sample: 2", "年齢は秘密です");
  } else {
    console.log("notExist sample: 2", "年齢は" + age + "歳です");
  }

  // age === undefined || age === nullなら左だけがtrue
}
