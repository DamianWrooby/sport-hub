export default {
	methods: {
		convertToSimpleDate(isoDate, reversed = false) {
			const date = new Date(isoDate);

			const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
			const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

			return reversed ? `${date.getFullYear()}-${month}-${day}` : `${day}-${month}-${date.getFullYear()}`;
		},

		convertToIsoDate(date, reversed = false) {
			const dateArr = date.split("-");
			const isoDate = reversed
				? new Date(Number(dateArr[2]), Number(dateArr[1]) - 1, Number(dateArr[0]), 0, 0, 0).toISOString()
				: new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]), 0, 0, 0).toISOString();

			return isoDate;
		},

		convertToTimestamp(date) {
			const dateArr = date.split("-");
			const timestamp = new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]), 0, 0, 0)
				.getTime()
				.toString();

			return timestamp;
		}
	}
};
