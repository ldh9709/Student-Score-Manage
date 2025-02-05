package backend.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import backend.auth.PrincipalDetailsService;
import backend.security.filter.JWTCheckFilter;
import backend.security.handler.APILoginFailHandler;
import backend.security.handler.APILoginSuccessHandler;


@Configuration//이 클래스를 읽고 빈으로 등록한다
@EnableWebSecurity(debug = true)//Spring Security의 설정을 활성화
@EnableMethodSecurity
public class SecurityConfig {
	
	//폼 로그인 시 사용자 인증 정보를 처리하는 서비스
	@Autowired
	private PrincipalDetailsService principalDetailsService;
	
	
	//인증 없이 접근 가능한 경로 정의
	private final String[] whitelist = {
		"/**", //모든 경로
		"/login", //로그인
	};
	
	//인증이 필요한 경로 정의
	private static final String[] AUTHENTICATED = {
			
	};
	
	/* Spring Security에서 HTTP 요청에 대한 보안 설정을 구성 */
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
		
		
		//개발 단계에서 CSRF 보호를 비활성화
		httpSecurity.csrf((config) -> {config.disable();});
		
		// 세션 관리 설정: Stateless 설정, 서버는 세션을 생성하지 않음
		httpSecurity.sessionManagement(sessionConfig -> sessionConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		
		 //CORS 설정: 외부에서 이 API를 호출할 수 있도록 CORS 설정을 정의
		 httpSecurity.cors(httpSecurityCorsConfigurer -> {
		      httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource());  // CORS 설정을 적용
		    });
		
		
		/*
		 * Spring Security에 UserDetailsService 구현체를 등록하는 역할
		 * 폼 기반 로그인에서 사용자가 입력한 username(여기서는 email)으로 사용자 정보를 가져오도록 Spring Security 인증 흐름을 설정
		 * principalDetailsService : userDetailService인터페이스를 구현한 구현체
		 */
		httpSecurity.userDetailsService(principalDetailsService);

		
		//폼 기반 로그인 구성
		httpSecurity.formLogin((config) -> {
			//config.loginPage("/login");
			config.successHandler(new APILoginSuccessHandler());
			config.failureHandler(new APILoginFailHandler());
		});
		
		httpSecurity.addFilterBefore(new JWTCheckFilter(), UsernamePasswordAuthenticationFilter.class);
				
		//로그아웃
		httpSecurity.logout((t) -> {
			t.logoutUrl("/logout")//로그아웃
			.deleteCookies("teacher")//쿠키삭제
			.addLogoutHandler(new SecurityContextLogoutHandler()); // SecurityContext 초기화
		});

		/***** 페이지 접근 경로 *****/
		httpSecurity.authorizeHttpRequests((authorizeHttpRequestsConfig) -> {
		      // swagger설정
		      authorizeHttpRequestsConfig
		      
		      	  .requestMatchers(AUTHENTICATED).authenticated()//인증된 사용자만 접근 가능
		      	  
			      .requestMatchers(whitelist).permitAll() //인증 없이 접근 가능
			      
			      .anyRequest().authenticated();
		    });
		
		return httpSecurity.build();
		
		
	}
	
	/* CORS 객체 설정 */
	 @Bean
	  public CorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();  // CORS 설정 객체 생성

	    // CORS 설정
	    configuration.setAllowedOriginPatterns(Arrays.asList("*"));  // 모든 출처에서 요청을 허용
	    configuration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "PUT", "DELETE"));  // 허용할 HTTP 메소드 설정
	    configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));  // 허용할 HTTP 헤더 설정
	    configuration.setAllowCredentials(true);  // 쿠키를 허용

	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();  // CORS 설정을 경로 기반으로 적용
	    source.registerCorsConfiguration("/**", configuration);  // 모든 경로에 대해 CORS 설정 적용

	    return source;  // CORS 설정을 반환
	  }
	
	
}
