import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/profile.png"
              alt="Ayesh Shrinath"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp} >
              Hi ,I am Ayesh Shrinath, an aspiring software engineer currently pursuing a BSc (Hons) in Information Technology, specializing in Software Engineering at the Sri Lanka Institute of Information Technology (SLIIT).
              I am passionate about developing innovative software solutions and have hands-on experience in full-stack development, mobile application development, and database management.
              With proficiency in C, C++, Java, Python, SQL, JavaScript, Kotlin, PHP, and R, I have worked on various projects, including a Sinhala-to-English and English-to-Sinhala Translator, a Remote Book Donation Mobile Application, a Smart Healthcare System, and an Online Class Management System. My expertise extends to web development (MERN stack, React.js, Node.js, Express.js), database technologies (MySQL, SQLite, MongoDB), and development tools such as Git, Visual Studio, and Android Studio.
              I am a quick learner, a team player, and a problem solver, and I am eager to apply my skills and knowledge to real-world projects and challenges.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            I am eager to gain industry experience through internships and collaborative projects, where I can apply my technical skills while learning from professionals.
            I am also an enthusiastic team player who enjoys tackling complex challenges and creating efficient, user-friendly solutions.
            </motion.p>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
