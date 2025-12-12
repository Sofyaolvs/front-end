export const homeVideoUrl =
  "https://pedala-mais-bucket.s3.sa-east-1.amazonaws.com/home-pedala-grande.mp4"

/**
 * Converte minutos em formato de horas e minutos
 * @param {number} minutes - Tempo total em minutos
 * @returns {string} Tempo formatado (ex: "2h 12min" ou "45min")
 */
export const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours > 0) {
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }
  return `${mins}min`
}
