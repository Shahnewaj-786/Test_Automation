package org.example;

import org.testng.Assert;
import org.testng.annotations.Test;

public class AppTest extends DriverSetup{
    @Test
    public void testTitle() {

        driver.get("https://www.facebook.com/");

        String actualTitle = driver.getTitle();

        Assert.assertEquals(actualTitle, "Facebook – log in or sign up");
    }

    @Test
    public void testURL(){
        driver.get("https://www.facebook.com");

        String actualURL = driver.getCurrentUrl();

        Assert.assertEquals(actualURL, "https://www.facebook.com/");
    }


}