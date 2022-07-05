import * as settings from "./settings"

export function prep(
	transcript={},
	overrides={},
	config=overrides?.config ?? transcript.config, //TODO default config

	presetKey=config?.presetKey ?? transcript.config?.presetKey ?? Object.keys(settings.presets)[0],
	preset=settings.presets[presetKey],

	props=overrides?.props ?? undefined, //? is {} or null nor nothin beter? should transcript have props?

	vidKeys=config?.vidKeys ?? transcript.config?.vidKeys ?? Object.keys(presets.vidSizes),

	segmentList=config?.segmentList ?? Array.from({length:(transcript.sequence.length)},(x,i)=>i) ?? [0]
){
	config.presetKey=presetKey
	config.preset=preset
	config.segmentList=segmentList
	config.vidKeys=vidKeys

	return {
		config,
		info: transcript.info,
		props,
		sequence: transcript.sequence,
	}
}
