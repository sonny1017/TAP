package com.tap.z_config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.tap.z_endpoints.ChatWebSocketHandler;
import com.tap.z_interceptors.WebHandshakeInterceptor;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
	@Autowired
	private ChatWebSocketHandler webSocketHandler;

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(webSocketHandler, "/chatWebsocket").setAllowedOrigins("*")
		.addInterceptors(httpSessionHandshakeInterceptor());

	}	
	
	@Bean
	public WebHandshakeInterceptor httpSessionHandshakeInterceptor() {
	    return new WebHandshakeInterceptor();
	}
}