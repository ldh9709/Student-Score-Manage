package backend.auth;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import backend.dto.TeacherDto;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@EqualsAndHashCode
/*
 * Spring Security가 인증 및 권한 부여를 처리할 때 필요한 사용자 정보를 제공하는 클래스
 * 일반 로그인과 OAuth2 로그인 모두에서 사용할 수 있도록 설계
 */
public class PrincipalDetails implements UserDetails {
	
	private final TeacherDto teacherDto;//일반 사용자 
	
	//일반 로그인 시 사용
	public PrincipalDetails(TeacherDto teacherDto) {
		this.teacherDto = teacherDto;
	}
	
	//해당 유저의 권한 목록 반환
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		//3항연산자 사용, Null이면 기본값 입력 아니면 그대로
		String roleName = (teacherDto.getTeacherRole() != null)
			        ? teacherDto.getTeacherRole().name()
			        : "ROLE_TEACHER"; // 기본 권한 설정
		return Collections.singletonList(new SimpleGrantedAuthority(teacherDto.getTeacherRole().name()));
	}
	
	//비밀번호 리턴
	@Override
	public String getPassword() {
		return teacherDto.getTeacherPassword();
	}
	
	@Override
	public String getUsername() {
		return teacherDto.getTeacherId();
	}
	
	
	public String getRole() {
		return teacherDto.getTeacherRole().toString();
	}
	
	
	/*
	 * 계정 만료 여부
	 * true : 만료 안됨
	 * false : 만료됨
	 */
	
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	
	/*
	 * 계정 잠김 여부
	 * true : 잠기지 않음
	 * false : 잠김
	 */
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	/*
	 * 비밀번호 만료 여부
	 * true : 만료 안됨
	 * false : 만료됨
	 */
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	
	/*
	 * 계정 활성화 여부
	 * true : 활성화됨
	 * false : 활성화 안됨
	 */
	@Override
	public boolean isEnabled() {
		return true;
	}
	
	
	/* JWT 토큰을 생성하는데 필요한 사용자 정보 */
	public Map<String, Object> getClaims(){
		Map<String, Object> dataMap = new HashMap<>();
		
		dataMap.put("teacherNo", teacherDto.getTeacherNo());
		dataMap.put("teacherName", teacherDto.getTeacherName());
		dataMap.put("teacherRole", teacherDto.getTeacherRole());
		
		return dataMap;
		
	}
	
	
}
