const weeks = ['日', '月', '火', '水', '木', '金', '土'];
const today = new Date();
let firstDayOfWeek = (new Date(today.getFullYear(), today.getMonth(), 1)).getDay();
let EndOfMonth = (new Date(today.getFullYear(), today.getMonth() + 1, 0)).getDate();

















console.log(firstDayOfWeek);
