import { buildConfig, isDefaultPortal } from '../portals'
import * as getApplicationConfig from '../../../../../sharedUtils/config'
import { availablePortals } from '../../../../../portals'

beforeEach(() => {
  jest.clearAllMocks()
  jest.restoreAllMocks()
})

describe('isDefaultPortal', () => {
  beforeEach(() => {
    jest.spyOn(getApplicationConfig, 'getApplicationConfig').mockImplementation(() => ({
      defaultPortal: 'edsc'
    }))
  })

  test('returns true if the portalId matches the defaultPortal', () => {
    expect(isDefaultPortal('edsc')).toBeTruthy()
  })

  test('returns false if the portalId does not match the defaultPortal', () => {
    expect(isDefaultPortal('simple')).toBeFalsy()
  })
})

describe('buildConfig', () => {
  test('builds a portal config of portal > edsc portal > default portal', () => {
    const config = buildConfig(availablePortals.idn)

    expect(config).toEqual({
      description: 'The CEOS International Directory Network (IDN) Search portal offers online information and access on scientific datasets about the Earth sciences, including geoscience, hydrospheric science, biospheric science, satellite remote sensing, and atmospheric science. This metadata describes data held by university departments, government agencies, multinational organizations, and other organizations all over the world.',
      features: {
        advancedSearch: true,
        authentication: true,
        featureFacets: {
          showAvailableInEarthdataCloud: true,
          showCustomizable: true,
          showMapImagery: true
        }
      },
      footer: {
        displayVersion: true,
        attributionText: 'NASA Official: Stephen Berrick',
        primaryLinks: [{
          title: 'FOIA',
          href: 'http://www.nasa.gov/FOIA/index.html'
        },
        {
          title: 'NASA Privacy Policy',
          href: 'http://www.nasa.gov/about/highlights/HP_Privacy.html'
        },
        {
          title: 'USA.gov',
          href: 'http://www.usa.gov'
        }],
        secondaryLinks: [{
          title: 'Earthdata Access: A Section 508 accessible alternative',
          href: 'https://access.earthdata.nasa.gov/'
        }]
      },
      hasLogo: true,
      hasStyles: true,
      moreInfoUrl: 'https://idn.ceos.org/',
      pageTitle: 'IDN',
      portalBrowser: true,
      portalId: 'idn',
      query: { hasGranulesOrCwic: null },
      title: {
        primary: 'IDN',
        secondary: 'CEOS International Directory Network'
      },
      ui: {
        showOnlyGranulesCheckbox: false,
        showNonEosdisCheckbox: false,
        showTophat: true
      },
      parentConfig: 'edsc'
    })
  })
})
