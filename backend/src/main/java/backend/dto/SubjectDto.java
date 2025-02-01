package backend.dto;

import backend.entity.Subject;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SubjectDto {
    
    private Long subjectNo;
    
    private String subjectName;
    
    public static SubjectDto toDto(Subject subject) {
        return SubjectDto.builder()
                .subjectNo(subject.getSubjectNo())
                .subjectName(subject.getSubjectName())
                .build();
    }
}
