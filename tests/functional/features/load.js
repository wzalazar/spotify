import { Selector } from 'testcafe'

import { SITE } from '../helpers'
import { server } from '../../../server'

fixture `Load Page`
  .page `${SITE}`

test(`Load page`, async t => {
  const should = `Should load the main page`
  const actual = Selector('.Search__title').innerText
  const expected = 'Search for an Artist'

  const { stop } = await server({ dev: false })

  await t.expect(actual).eql(expected, should)

  await stop()
})
