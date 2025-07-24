function logger(obj) {
  console.log(`Location: ${obj.location}`);
  console.log(`Condition: ${obj.condition}`);
  console.log(`Temperature: ${obj.temperature}`);
}

export { logger };
