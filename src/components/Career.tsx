import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI/ML)</h4>
                <h5>SRM University AP</h5>
              </div>
              <h3>2024 — Present</h3>
            </div>
            <p>
              Specializing in AI/ML with a CGPA of 8.7. Focused on DSA, OOP, DBMS,
              Operating Systems, and applied machine learning. Building projects
              that combine research-backed models with production-ready code.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer</h4>
                <h5>Trilingo • AlgoViz • Student Management System</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Shipped a voice-enabled translator (Trilingo), an interactive DSA
              visualizer (AlgoViz), and a role-based student management system.
              Focused on JavaScript, real-time UI, and secure CRUD flows with auth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Engineer</h4>
                <h5>SugarShield • MahendraChandra & Sons</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Delivered production web experiences focused on performance and
              reliability for health risk (SugarShield) and client-facing
              operations (MahendraChandra & Sons) using React and Node.js.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>Arthashastra-AI • CodeInsight-AI • Turbofan RUL</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built AI copilots and predictive models spanning underwriting,
              code review, and remaining useful life estimation. Combined Python,
              LLMs, and web delivery to turn unstructured inputs into actionable
              insights with clear signals and dashboards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
