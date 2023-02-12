let i = 10;

const countDown = () => {
  console.log(i);
  i--;
  if (i > 0) {
    countDown();
  } else {
    console.log('Happy Independence Day!');
  }
};

countDown();