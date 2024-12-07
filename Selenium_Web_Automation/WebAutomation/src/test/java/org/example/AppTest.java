package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

public class AppTest extends DriverSetup{
    @Test
    public void testTitle() {

        browser.get("https://www.facebook.com/");

        String actualTitle = browser.getTitle();

        Assert.assertEquals(actualTitle, "Facebook – log in or sign up");
    }

    @Test
    public void testURL(){
        browser.get("https://www.facebook.com");

        String actualURL = browser.getCurrentUrl();

        Assert.assertEquals(actualURL, "https://www.facebook.com/");
    }


}