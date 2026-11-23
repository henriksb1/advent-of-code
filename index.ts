// Skip [ "/path/to/bun", "/path/to/cli.ts" ]
const [year, day, part] = Bun.argv.slice(2);

if (!year || !day) {
	console.error("Usage: bun index.ts <year> <day> [part]");
	process.exit(1);
}

const paddedDay = day.padStart(2, "0");
const basePath = `./src/${year}/day${paddedDay}`;

const { part1, part2 } = await import(`${basePath}.ts`);
const input = await Bun.file("./input.txt").text();

if (!part || part === "1") {
	console.time("Part 1");
	console.log("Part 1:", await part1(input));
	console.timeEnd("Part 1");
}

if (!part || part === "2") {
	console.time("Part 2");
	console.log("Part 2:", await part2(input));
	console.timeEnd("Part 2");
}
