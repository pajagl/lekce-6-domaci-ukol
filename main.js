// tady je místo pro náš program

// Domácí úkol
// Parsování data

const parseDate = (vstupDatum) => {
    return {
    day: Number(vstupDatum.slice(0,2)),
    month: Number(vstupDatum.slice(3,5)),
    year: Number(vstupDatum.slice(6)),
    }
}

console.log(parseDate("01.03.2023"))

// Formátování data
const formatDate = ({ day, month, year }) => {

    const datum = {
        formatDay: String(day).padStart(2, '0'),
        formatMonth: String(month).padStart(2, '0'),
        formatYear: String(year),
    }

    const { formatDay, formatMonth, formatYear } = datum;

    return formatDay + "." + formatMonth + "." + formatYear;
}

console.log(formatDate({ day: 2, month: 3, year: 2023 }))

// Python zaokrouhlování
const round = (cislo) => {
	const vetsiCast = Math.trunc(cislo)
	const mensiCast = cislo - vetsiCast
	if (Math.abs(mensiCast) === 0.5) {
		if (vetsiCast % 2 === 0) {
			return vetsiCast
		} else {
			return vetsiCast + 2 * mensiCast
		}
	}
	return Math.round(cislo)
}

console.log("Zaokrouhli číslo 1.4: ", round(1.4))
console.log("Zaokrouhli číslo 1.6: ", round(1.6))
console.log("Zaokrouhli číslo 3.5: ", round(3.5))
console.log("Zaokrouhli číslo 2.5: ", round(2.5))

