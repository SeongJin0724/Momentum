const quotes = [
  {
    quote:"자신을 사랑하는 법을 아는 것이 가장 위대한 사랑입니다.",
    author:"Michael Masser(팝 음반 프로듀서)",
  },
  {
    quote:"인생은 겸손에 대한 오랜 수업이다.",
    author:"James M. Barrie(영국의 소설가ㆍ극작가)",
  },
  {
    quote:"교육은 최상의 노공부벌레들에게 잘 해주십시오. 나중에 그 사람 밑에서 일하게 될 수도 있습니다.",
    author:"Bill Gates(마이크로소프트의 창업자)",
  },
  {
    quote:"멈추지 말고 한 가지 목표에 매진하라. 그것이 성공의 비결이다.",
    author:"Anna Pavlova(세계 발레 역사상 가장 위대한 발레리나 중 한 명으로 칭송받고 있는 안나 파블로바.)",
  },
  {
    quote:"집을 가장 아름답게 꾸며주는 것은 자주 찾아오는 친구들이다.",
    author:"Ralph Waldo Emerson(미국의 목사이자 사상가)",
  },
  {
    quote:"한 시간 독서로 누그러지지 않은 걱정은 결코 없다.",
    author:"Charles De Secondat(프랑스의 법리학자이자 계몽사상가.)",
  },
  {
    quote:"인간의 감정은 누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.",
    author:"Jean Paul Richter(독일의 미술가)"
  },
  {
    quote:"경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다.",
    author:"Auguste Rodin(프랑스 조각가)"
  },
  {
    quote:"게으름 피울 수 있을 만큼 똑똑하지 못한 것을 포부가 높기 때문이라고 변명할 수 없다.",
    author:"Edgar Bergen(영화배우)"
  },
  {
    quote:"인간은 살아있기 위해 무언가에 대한 열망을 간직해야 한다.",
    author:"Margaret Deland(미국의 소설가)"
  }, 
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;