const spacing = {
  spacing01: '0.125rem',
  spacing02: '0.25rem',
  spacing03: '0.5rem',
  spacing04: '0.75rem',
  spacing05: '1rem',
  spacing06: '1.5rem',
  spacing07: '2rem',
  spacing08: '3rem',
  borderRadius: '12px',
};

// Inter
const fonts = {
  body: {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
  },
  bodyBold: {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1.5rem',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
  },
  labelBold: {
    fontFamily: 'Inter',
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: '1.25rem',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: '2rem',
  },
  titleBold: {
    fontFamily: 'Inter',
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2rem',
  },
};

const light = {
  ui01: '#034C65',
  ui02: '#EBFAFE',
  ui03: '#2AC8F4',
  ui04: '#7A7A7A',
  ui05: '#FF0000',
  hover01: '#04698b',
  hover02: '#c5f0fc',
  hover03: '#0ba9d5',
  hover04: '#a3a3a3',
  hover05: '#ff3333',
  textColor01: '#020202',
  textColor02: '#595959',
  textColor03: '#FFFFFF',
};

const dark = {};

const themes = {
  light: { ...light, ...spacing, ...fonts },
  dark: { ...dark, ...spacing, ...fonts },
};

export default themes;
