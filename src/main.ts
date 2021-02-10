import { setup, register } from "playgoer";

setup({
  projectId: "dual-play",
  editable: true,
  data: {
    Design: {
      backgroundColor: "#2465ff",
      leftColor: "#ff0000",
      rightColor: "#fff700",
      distance: "3.5",
    },
  },
});

const {
  onUpdate,
  group: { data },
} = register({
  name: "Design",
  tokens: [
    {
      key: "backgroundColor",
      value: "#FFFFFF",
      input: {
        type: "color",
      },
    },
    {
      key: "leftColor",
      value: "#FFFFFF",
      input: {
        type: "color",
      },
    },
    {
      key: "rightColor",
      value: "#FFFFFF",
      input: {
        type: "color",
      },
    },
    {
      key: "distance",
      value: "50",
      input: {
        type: "range",
        min: 0,
        max: 100,
        step: 0.25,
      },
    },
  ],
});

type Data = typeof data;

function update(data: Data) {
  for (const key in data) {
    document.documentElement.style.setProperty(`--${key}`, data[key]);
  }
}

onUpdate(update);
