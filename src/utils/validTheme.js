const validThemes = ["light", "contrast"]

export const validTheme = (savedTheme) => {
  if (validThemes.includes(savedTheme)) {
    return savedTheme
  }

  localStorage.setItem("theme", "light")
  return "light"
}
