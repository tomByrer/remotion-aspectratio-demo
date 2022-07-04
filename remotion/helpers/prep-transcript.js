import * as settings from "./settings"

export function prep(
	transcript={},
	overrides={},
	config = overrides?.config ?? transcript.config, //TODO default config

	presetKey = config?.presetKey ?? transcript.config?.presetKey ?? Object.keys(settings.presets)[0],
	presets = settings.presets[presetKey],

	vidKeys = config?.vidKeys ?? transcript.config?.vidKeys ?? Object.keys(presets.vidSizes),

	segmentList = config?.segmentList ?? Array.from({length:(transcript.sequence.length)},(x,i)=>i) ?? [0]
){
	config.presetKey = presetKey
	config.presets = presets
	config.segmentList = segmentList
	config.vidKeys = vidKeys

	return {
		config,
		info: transcript.info,
		sequence: transcript.sequence,
	}
}
