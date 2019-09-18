let regex = /((\d{4})-(\d{6}))/g;
let matched;
while((matched = regex.exec('0970-666888, 0970-168168')) != null) {
    console.log(matched);
}