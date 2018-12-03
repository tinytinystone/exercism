// 1. 문제를 파악하자.
// Calculate the moment when someone has lived for 10 ^ 9 seconds.
// 어떤 사람이 10의 9제곱 초(1, 000, 000, 000초) 만큼 살았을 때의 시점(년 / 월 / 일(/시분초))을 계산해라.
// A gigasecond is 10 ^ 9(1, 000, 000, 000) seconds.

// 2. 테스트 코드를 읽어보자.
// 이 사람의 생일(그러니까 시작 시점) 을 new Date()를 인수로 입력 받고, 그 시점으로부터 10 ^ 9초 후의 년 / 월 / 일(/시분초) 가 반환되는 함수(gigasecond)가 필요하다.

// 3. 필요한 정보를 검색해 보자.

// 3-1. Date 객체
// 3-1-1. new Date() - 현재 시각을 나타내는 Date 객체를 반환합니다.
// 3-1-2. new Date(value) - value가 정수인 경우, 이를 밀리초 단위의 유닉스 시간으로 간주해서 이에 해당하는 Date 객체를 반환합니다. value가 문자열인 경우, 이 문자열이 나타내는 Date 객체를 반환합니다.
// 3-1.3. new Date(year, month, day, hour, minutes, seconds, milliseconds) - 년, 월, 일, 시, 분, 초, 밀리초를 직접 입력해서 Date 객체를 생성할 수도 있습니다. '월' 부분은 0부터 11까지의 값을 가집니다. 월 이후의 인수는 생략가능하고, 인수를 생략하면 '일'은 1로, 나머지는 모두 0으로 지정됩니다.

// 3-2. Date.getTime() - A number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date.



const gigasecond = time => new Date(time.getTime() + (10 ** 9) * 1000);

export { gigasecond };
