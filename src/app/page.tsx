import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="relative  m-10">
        {/* <Zoom> */}
        <Box size={400} placement="bottom" depth={0} />
        {/* </Zoom> */}
      </div>
    </div>
  );
}

const RATIO = 1 / 1.61803398875;

async function Box(props: {
  size: number;
  placement: "top" | "bottom" | "left" | "right";
  depth: number;
}) {
  if (props.depth > 10) {
    return null;
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(props.placement, props.size);
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        ...{
          top: {
            top: 0,
            left: 0,
            transform: "translateY(-100%)",
          },
          right: {
            top: 0,
            right: 0,
            transform: "translateX(100%)",
          },
          bottom: {
            bottom: 0,
            right: 0,
            transform: "translateY(100%)",
          },
          left: {
            bottom: 0,
            left: 0,
            transform: "translateX(-100%)",
          },
        }[props.placement],
      }}
      className="absolute outline outline-white/50 border-white animate-fade-in"
    >
      <Suspense fallback={null}>
        <Box
          size={props.size * RATIO}
          placement={
            (
              {
                top: "right",
                right: "bottom",
                bottom: "left",
                left: "top",
              } as const
            )[props.placement]
          }
          depth={props.depth + 1}
        />
      </Suspense>
      <div className="absolute inset-0 border border-white text-white overflow-clip">
        <Circle size={props.size * 2} placement={props.placement} />
      </div>
    </div>
  );
}

function Circle(props: {
  size: number;
  placement: "top" | "bottom" | "left" | "right";
}) {
  console.log("C", props.placement, props.size);
  return (
    <div
      className="rounded-full border border-white absolute overflow-clip"
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,

        ...{
          top: {
            right: 0,
            bottom: 0,
            transform: "translate(50%, 50%)",
          },
          right: {
            left: 0,
            bottom: 0,
            transform: "translate(-50%, 50%)",
          },
          bottom: {
            left: 0,
            top: 0,
            transform: "translate(-50%, -50%)",
          },
          left: {
            right: 0,
            top: 0,
            transform: "translate(50%, -50%)",
          },
        }[props.placement],
      }}
    >
      <div className="absolute inset-0 animate-flash bg-white/50 opacity-20" />
    </div>
  );
}
