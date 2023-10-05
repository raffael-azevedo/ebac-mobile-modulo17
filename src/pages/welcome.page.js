import Page from './page.js'

class WelcomePage extends Page {
    /*
    define os seletores
    */

    get nextButton () { return $('//android.widget.Button[@text="Next"]') }
    get skipButton () { return $('//android.widget.Button[@text="Skip"]') }
    get loginButton () { return $('//android.widget.Button[@text="Log In"]') }
    get getStartedButton () { return $('//android.widget.Button[@text="Get Started"]') }
    get myStoreTitle () { return $('(//android.widget.FrameLayout[@content-desc="My store"])[1]') }

    /*
    define os métodos
    */

    async goToLoginPage () {
        if (await this.myStoreTitle.isExisting()) {
            return
        } else {
            if (await this.skipButton.isExisting()) {
                await this.skipButton.click()
            }
            return this.loginButton.click()
        }
    }
}

export default new WelcomePage()