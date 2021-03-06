import { TypeaheadPage } from './typeahead.po.spec';
import { imageCompare } from '../common/image-compare';
import { browser } from 'protractor';

describe('TypeaheadPage Tests', () => {

    let page: TypeaheadPage;

    beforeEach(async () => {
        page = new TypeaheadPage();
        await page.getPage();
    });

    // restore the window to its original size after all these tests have run
    afterAll(async () => {
        await browser.driver.manage().window().setSize(800, 600);
    });

    it('should allow dropDirection to be set to down or up', async () => {

        await page.clickOnDropDirectionDown();

        await page.typeaheadInput.click();
        expect(await page.getTypeaheadOptionListClass()).toContain('ux-typeahead-all-options');
        expect(await page.getTypeaheadClass()).not.toContain('drop-up');

        expect(await imageCompare('typeahead-drop-direction-down')).toEqual(0);

        await page.clickOnDropDirectionUp();

        await page.typeaheadInput.click();
        expect(await page.getTypeaheadOptionListClass()).toContain('ux-typeahead-all-options');
        expect(await page.getTypeaheadClass()).toContain('drop-up');

        expect(await imageCompare('typeahead-drop-direction-up')).toEqual(0);
    });

    it('should allow dropDirection to be auto and automatically change the drop direction depending on the available space', async () => {

        await page.clickOnMaxHeight();

        await page.typeaheadInput.click();
        expect(await page.getTypeaheadOptionListClass()).toContain('ux-typeahead-all-options');
        expect(await page.getTypeaheadClass()).toContain('drop-up');

        expect(await imageCompare('typeahead-drop-direction-auto-up')).toEqual(0);

        await page.clickOnMaxHeightDecrease();

        await page.typeaheadInput.click();
        expect(await page.getTypeaheadOptionListClass()).toContain('ux-typeahead-all-options');
        expect(page.getTypeaheadClass()).not.toContain('drop-up');

        expect(await imageCompare('typeahead-drop-direction-auto-down')).toEqual(0);
    });

});