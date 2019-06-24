import {Spectron} from '../../js/test/Spectron';
import {SpectronSpec} from '../../js/test/SpectronSpec';

describe('firebase-groups', function() {

    Spectron.setup(__dirname);
    this.timeout(240000);

    it('basic tests', async function() {

        await SpectronSpec.create(this.app).waitFor(true);

    });

});