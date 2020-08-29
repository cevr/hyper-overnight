"use strict";

const colors = {
  foreground: "#D6D9E0",
  background: "#0E1729",
  cursor: "#ecc48d",
  cursorAccent: "#ecc48d",
  selection: "rgba(38, 51, 76, 0.2)",
  border: "#070E1B",
};

const terminalColors = {
  black: "#2E384D",
  white: "#D6D9E0",
  blue: "#9AC6F2",
  cyan: "#92D8E6",
  green: "#BBD99E",
  magenta: "#C1A2FF",
  red: "#f87086",
  yellow: "#ecc48d",
  lightBlack: "#3D485F",
  lightWhite: "#F2F2F2",
  lightBlue: "#ACD1F5",
  lightCyan: "#A5E0EC",
  lightGreen: "#C9E2AF",
  lightMagenta: "#CCB3FF",
  lightRed: "#FFB3B3",
  lightYellow: "#ecc48d",
};

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor: colors.background,
    foregroundColor: colors.foreground,
    borderColor: colors.border,
    cursorColor: colors.cursor,
    cursorAccentColor: colors.cursorAccent,
    selectionColor: colors.selection,
    colors: terminalColors,
    css: `
		/* Hide title when only one tab */
		.tabs_title {
      display: none !important;
		}
		/* Add a highlight line below the active tab */
		.tab_tab::before {
      content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: ${colors.cursor};
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
      transform: scaleX(1);
			transition: all 350ms cubic-bezier(0, 0, 0.2, 1);
		}
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
      opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
      opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
		/* Allow custom css / overrides */
		${config.css}
	`,
  });
