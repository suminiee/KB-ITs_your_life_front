const fs = require('fs').promises;

async function main() {
  //다 읽을때까지 멈춰 -> 절차적 코딩 스타일이랑 비슷하게 가져갈 수 있음 : await : 멈춰!!!!!!!..
  let data = await fs.readFile('readme.txt');
  console.log('1번 ' + data.toString());

  data = await fs.readFile('readme.txt');
  console.log('2번 ' + data.toString());

  data = await fs.readFile('readme.txt');
  console.log('3번 ' + data.toString());

  data = await fs.readFile('readme.txt');
  console.log('4번 ' + data.toString());
}

main();
