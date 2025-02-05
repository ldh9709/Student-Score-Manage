package backend.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import backend.dto.TeacherDto;
import backend.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;

/**** 일반 로그인 시 요청한 username을 기반으로 데이터를 가져와 인증 객체 반환 *****/
@Service
@RequiredArgsConstructor//final로 선언한 것들이 주입된다(Autowired 사용X)
public class PrincipalDetailsService implements UserDetailsService {
	
	//멤버리포지토리 의존성 주입
	private final TeacherRepository teacherRepository;
	
	@Override
	//로그인 요청 받을 시 호출
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		//아이디로 멤버 찾기
		TeacherDto findMember = TeacherDto.toDto(teacherRepository.findByTeacherId(username));
        
		//멤버가 존재하면 찾은 멤버 반환
		if(findMember != null) {
			
			return new PrincipalDetails(findMember);
		}
		
		return null;
	}

}
