package entity;

import java.util.ArrayList;
import java.util.List;

import dto.SubjectDto;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Subject {
    
    @Id
    @SequenceGenerator(name = "subject_no_SEQ", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subject_no_SEQ")
    @Column(name = "subject_no")
    private Long subjectNo;
    
    @Column(name = "subject_name")
    private String subjectName;
    
    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
    @Builder.Default
    private List<Score> score = new ArrayList<>();
    
    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
    @Builder.Default
    private List<GradeAvg> gradeAvg = new ArrayList<>();
    
    public static Subject toEntity(SubjectDto subjectDto) {
    	
        return Subject.builder()
                .subjectNo(subjectDto.getSubjectNo())
                .subjectName(subjectDto.getSubjectName())
                .build();
    }
}
