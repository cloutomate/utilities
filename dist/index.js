export function startLoadingScreen(domSelector) {
  $(domSelector).addClass("loading");
}

export function stopLoadingScreen(domSelector) {
  $(domSelector).removeClass("loading");
}
