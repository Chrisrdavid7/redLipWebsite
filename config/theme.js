// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  passion: {
    primary: colors.pink.base, // primary main
    primarylight: '#4A2639', // SECONDARY BACKGROUND
    primarydark: colors.pink.darken4, // primary dark
    secondary: colors.indigo.accent4, // secondary main
    secondarylight: colors.indigo.lighten4, // secondary light
    secondarydark: colors.indigo.darken4, // secondary dark
    anchor: colors.indigo.base, // link
  },
};

const theme = {
  ...palette.passion,
};

export default theme;
