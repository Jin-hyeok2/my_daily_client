const monthMapper = {
  Jan: "01", Feb: "02", Mar: "03",
  Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09",
  Oct: "10", Nov: "11", Dec: "12",
};

export default class DateUtil {
  date;

  constructor() {
    this.date = this.getStringFromDate(new Date());
  }

  setDate(date) {
    this.date = date;
  }

  getStringFromDate(date) {
    if (typeof date === "object") {
      const dateArr = date.toString().split(" ");
      dateArr[0] = dateArr[3];
      dateArr[1] = monthMapper[dateArr[1]];
      return dateArr.slice(0, 3).join("-");
    } else {
      return undefined;
    }
  }

  plusDay(day) {
    const dateArr = this.toIntArr();
    dateArr[2] += day;
    this.date = dateArr.map(e => String(e).padStart(2, "0")).join("-");

    return this;
  }

  minusDay(day) {
    return this.plusDay(-day);
  }

  plusMonth(month) {
    const dateArr = this.toIntArr();
    dateArr[1] += month;
    this.date = dateArr.map(e => String(e).padStart(2, "0")).join("-");

    return this;
  }

  minusMonth(month) {
    return this.plusMonth(-month);
  }

  plusYear(year) {
    const dateArr = this.toIntArr();
    dateArr[0] += year;
    this.date = dateArr.map(e => String(e).padStart(2, "0")).join("-");

    return this;
  }

  minusYear(year) {
    return this.plusYear(-year);
  }

  toIntArr() {
    return this.date.split("-").map((e) => parseInt(e));
  }
}
