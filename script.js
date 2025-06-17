const field = document.getElementById("video-id");
const wrapper = document.getElementsByClassName("wrapper")[0];

field.addEventListener("input", () => {
  const oldIframes = wrapper.querySelectorAll("iframe.player");
  oldIframes.forEach((iframe) => iframe.remove());

  const value = field.value.trim();

  const newIframe = document.createElement("iframe");
  newIframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  newIframe.setAttribute("class", "player");
  newIframe.setAttribute("id", "player");
  newIframe.setAttribute("allowfullscreen", "");

  if (value !== "") {
    const match = value.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    if (match) {
      const videoId = match[1];
      newIframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
    }
  }
  wrapper.insertBefore(newIframe, wrapper.firstChild);
});