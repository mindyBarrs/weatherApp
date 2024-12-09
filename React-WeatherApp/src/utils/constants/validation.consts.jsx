export const latLongRegex =
	/^-?([1-8]?\d(\.\d+)?|90(\.0+)?),\s?-?(180(\.0+)?|((1[0-7]\d)|(\d{1,2}))(\.\d+)?)$/;

export const postalCodeRegex =
	/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
export const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

export const cityRegex = /^[a-zA-Z\s\-']+$/;
