package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.example.demo.models.Fruit;
import com.example.demo.repositories.FruitsRepository;

import org.json.JSONException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = DemoApplication.class)
@TestPropertySource("classpath:application.integratinotests.properties")
public class FruitsIntegrationTests {

    @Autowired
    private FruitsRepository fruitsRepository;

    @LocalServerPort
    private int port;

    TestRestTemplate restTemplate = new TestRestTemplate();

    HttpHeaders headers = new HttpHeaders();

    @Test
    public void restGetFruits() throws JSONException {
        fruitsRepository.save(new Fruit(null, "apple", "Golden"));

        HttpEntity<String> requestEntity = new HttpEntity<String>(null, headers);

        ResponseEntity<String> response = restTemplate.exchange("http://localhost:" + port + "/Fruits", HttpMethod.GET,
                requestEntity, String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());

        String expectedJson = "[{id:1,type:apple,name:Golden}]";
        JSONAssert.assertEquals(expectedJson, response.getBody(), false);
    }
}
