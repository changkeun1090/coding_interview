// 1. newInterval의 'end'가 interval의 가장 작은 수보다 작을 때
// 2. newInterval의 'start'가 interval 가장 큰 수보다 클 때
// 3. newEnd만 intervals 사이에 있을 때
// 4. newStart만 intervals 사이에 있을 때
// 5. newStart와 newEnd 모두 intervals 사이에 있을 때

const insert = (intervals, newInterval) => {
	const newStart = newInterval[0];
	const newEnd = newInterval[1];
	const start = intervals[0][0];
	const end = intervals[intervals.length - 1][1];

	// #1
	if (newEnd < start) {
		intervals.unshift(newInterval);
		return intervals;
	}

	// #2
	if (newStart > end) {
		intervals.push(newInterval);
		return intervals;
	}
};

const intervals = [
		[1, 2],
		[3, 5],
		[6, 7],
		[8, 10],
		[12, 16],
	],
	newInterval = [4, 8];

insert(intervals, newInterval);
// [[1,2],[3,10],[12,16]]
