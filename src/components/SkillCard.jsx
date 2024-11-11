export const SkillCard = ({ icon, title, description }) => {
    return (
      <div className="flex items-center bg-white rounded-lg shadow-lg p-4 space-x-4">
        <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
        <div>
          <h3 className="text-lg font-semibold text-orange-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };