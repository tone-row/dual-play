import { setup, register } from "playgoer";

setup({
  projectId: "dual-play",
  editable: true,
  data: {
    Design: {
      backgroundColor: "#000000",
      leftColor: "#ff0000",
      rightColor: "#fff700",
      distance: "28.5",
      animationName: "",
      animationSpeed: "8",
      rwAnimationDelay: "0.5",
      animationEasing: "ease-in-out",
      tneSpin: "-360",
      rwSpin: "-360",
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
    {
      key: "animationName",
      value: "",
    },
    {
      key: "animationSpeed",
      value: "8",
      input: {
        type: "range",
        min: 0.25,
        max: 20,
        step: 0.25,
      },
    },
    {
      key: "rwAnimationDelay",
      value: ".5",
      input: {
        type: "range",
        min: 0.01,
        max: 2,
        step: 0.01,
      },
    },
    {
      key: "animationEasing",
      value: "ease-in-out",
    },
    {
      key: "tneSpin",
      value: "45",
      input: {
        type: "range",
        min: -360,
        max: 360,
        step: 1,
      },
    },
    {
      key: "rwSpin",
      value: "-45",
      input: {
        type: "range",
        min: -360,
        max: 360,
        step: 1,
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

const options: Data[] = [
  {
    backgroundColor: "#000000",
    leftColor: "#ff0000",
    rightColor: "#fff700",
    distance: "28.5",
    animationName: "",
    animationSpeed: "8",
    rwAnimationDelay: "0.5",
    animationEasing: "ease-in-out",
    tneSpin: "-360",
    rwSpin: "-360",
  },
  {
    backgroundColor: "#ff7b00",
    leftColor: "#000000",
    rightColor: "#000000",
    distance: "0",
    animationName: "",
    animationSpeed: "8",
    rwAnimationDelay: "0.5",
    animationEasing: "ease-in-out",
    tneSpin: "-299",
    rwSpin: "-43",
  },
  {
    backgroundColor: "#7affd9",
    leftColor: "#fbff00",
    rightColor: "#fff700",
    distance: "16.75",
    animationName: "",
    animationSpeed: "8",
    rwAnimationDelay: "0.5",
    animationEasing: "ease-in-out",
    tneSpin: "-24",
    rwSpin: "-45",
  },
  {
    backgroundColor: "#ffffff",
    leftColor: "#000000",
    rightColor: "#000000",
    distance: "0",
    animationName: "its-a-record",
    animationSpeed: "8",
    rwAnimationDelay: "0.5",
    animationEasing: "ease-in-out",
    tneSpin: "",
    rwSpin: "",
  },
  {
    backgroundColor: "#2465ff",
    leftColor: "#ff0000",
    rightColor: "#fff700",
    distance: "2",
    animationName: "its-a-record",
    animationSpeed: "3",
    rwAnimationDelay: "0.08",
    animationEasing: "ease-in-out",
    tneSpin: "45",
    rwSpin: "-252",
  },

  {
    backgroundColor: "#000000",
    leftColor: "#ffffff",
    rightColor: "#ffffff",
    distance: "0",
    animationName: "its-a-record",
    animationSpeed: "13.75",
    rwAnimationDelay: "0.2",
    animationEasing: "linear",
    tneSpin: "",
    rwSpin: "",
  },
];

// add buttons
let i = 0;
for (const option of options) {
  i++;
  const button = document.createElement("button");
  button.innerText = i.toString();
  button.onclick = () => update(option);
  document.getElementById("button-wrapper").appendChild(button);
}
