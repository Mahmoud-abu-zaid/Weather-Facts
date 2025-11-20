export function wheaterImage(condition: string) {
  const c = condition.toLowerCase();

  if (c.includes("sunny") || c.includes("clear")) {
    return "/img/sun.webp";
  }

  if (c.includes("cloud") || c.includes("overcast")) {
    return "/img/cloudy.webp";
  }

  if (c.includes("rain") || c.includes("drizzle") || c.includes("shower")) {
    return "/img/rain.webp";
  }

  if (c.includes("snow") || c.includes("sleet") || c.includes("blowing snow")) {
    return "/img/snow.webp";
  }

  if (c.includes("thunder") || c.includes("storm") || c.includes("fog") || c.includes("mist")) {
    return "/img/thunderstorm.webp";
  }

  return "/img/sun.webp";
}
