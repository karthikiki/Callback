let i = 10;

const countDown = () => {
  console.log(i);
  i--;
  if (i > 0) {
    setTimeout(countDown, 1000);
  } else {
    console.log('Happy Independence Day!');
  }
};

countDown();