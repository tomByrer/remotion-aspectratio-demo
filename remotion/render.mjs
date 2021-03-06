import path from "path"
import { bundle } from "@remotion/bundler"
import { getCompositions, renderMedia } from "@remotion/renderer"

const main = async () => {
  // The composition you want to render
  const compositionId = "Title";

  // You only have to do this once, you can reuse the bundle.
  // const entry = "./remotion/index";
  const registerreels = "./remotion/index"
  console.log("Creating a Webpack bundle of the video")
  const bundleLocation = await bundle(path.resolve(registerreels))

  // Parametrize the video by passing arbitrary props to your component.
  const inputProps = {
    foo: "bar",
  }

  // Extract all the compositions you have defined in your project
  // from the webpack bundle.
  const reels = await getCompositions(bundleLocation, {
    // You can pass custom input props that you can retrieve using getInputProps()
    // in the composition list. Use this if you want to dynamically set the duration or
    // dimensions of the video.
    inputProps,
  })

  console.log('reels', reels)

  // // Select the composition you want to render.
  // const composition = {
  //   id: 'TitleOutlined-360x360-16fps',
  //   defaultProps: { title: 'Render Test Text', style: {color: 'black'} },
  //   durationInFrames: 55,
  //   fps: 16,
  //   height: 200,
  //   width: 400,
  // }

  for( let i=0; i<reels.length; i++ ){
    const composition = reels[i]
    const outputLocation = `out/${composition.id}.mp4`;
    console.log("Attempting to render:", outputLocation);
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation,
      inputProps: composition.defaultProps,
    })
  }
  console.log("Render done!")

};

main()
